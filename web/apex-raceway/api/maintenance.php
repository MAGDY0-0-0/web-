<?php
// api/maintenance.php
session_start();
require_once 'db.php';

header('Content-Type: application/json');

if (!isset($_SESSION['user_email'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

$user_email = $_SESSION['user_email'];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->prepare('SELECT * FROM maintenance_requests WHERE user_email = ? ORDER BY created_at DESC');
    $stmt->execute([$user_email]);
    echo json_encode($stmt->fetchAll());
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $carName = $data['carName'] ?? '';
    $serviceType = $data['serviceType'] ?? '';
    $date = $data['date'] ?? '';
    $timeSlot = $data['timeSlot'] ?? '';
    $notes = $data['notes'] ?? '';
    
    if (!$carName || !$date) {
        echo json_encode(['error' => 'Invalid data']);
        exit;
    }
    
    $stmt = $pdo->prepare('INSERT INTO maintenance_requests (user_email, car_name, service_type, date, time_slot, notes) VALUES (?, ?, ?, ?, ?, ?)');
    $stmt->execute([$user_email, $carName, $serviceType, $date, $timeSlot, $notes]);
    
    echo json_encode(['success' => true]);
    exit;
}
?>
