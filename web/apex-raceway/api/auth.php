<?php
// api/auth.php
session_start();
require_once 'db.php';

header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if ($action === 'register') {
        $email = trim($data['email'] ?? '');
        $password = $data['password'] ?? '';
        
        if (!$email || !$password) {
            echo json_encode(['error' => 'Email and password required']);
            exit;
        }
        
        $hash = password_hash($password, PASSWORD_DEFAULT);
        
        try {
            $stmt = $pdo->prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
            $stmt->execute([$email, $hash]);
            
            $_SESSION['user_email'] = $email;
            echo json_encode(['success' => true, 'email' => $email]);
        } catch (\PDOException $e) {
            if ($e->getCode() == 23000) { // Integrity constraint violation
                echo json_encode(['error' => 'Email already registered']);
            } else {
                echo json_encode(['error' => 'Registration failed']);
            }
        }
        exit;
    }
    
    if ($action === 'login') {
        $email = trim($data['email'] ?? '');
        $password = $data['password'] ?? '';
        
        $stmt = $pdo->prepare('SELECT password_hash FROM users WHERE email = ?');
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        
        if ($user && password_verify($password, $user['password_hash'])) {
            $_SESSION['user_email'] = $email;
            echo json_encode(['success' => true, 'email' => $email]);
        } else {
            echo json_encode(['error' => 'Invalid email or password']);
        }
        exit;
    }
    
    if ($action === 'logout') {
        session_destroy();
        echo json_encode(['success' => true]);
        exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $action === 'me') {
    if (isset($_SESSION['user_email'])) {
        echo json_encode(['email' => $_SESSION['user_email']]);
    } else {
        echo json_encode(['email' => null]);
    }
    exit;
}

echo json_encode(['error' => 'Invalid action']);
?>
