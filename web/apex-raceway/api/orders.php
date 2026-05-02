<?php
// api/orders.php
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
    $stmt = $pdo->prepare('SELECT * FROM parts_orders WHERE user_email = ? ORDER BY created_at DESC');
    $stmt->execute([$user_email]);
    $orders = $stmt->fetchAll();
    
    // Decode JSON items for frontend convenience
    foreach ($orders as &$order) {
        $order['items'] = json_decode($order['items'], true);
    }
    
    echo json_encode($orders);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $items = $data['items'] ?? [];
    $total = $data['total'] ?? 0;
    
    if (empty($items)) {
        echo json_encode(['error' => 'Cart is empty']);
        exit;
    }
    
    $itemsJson = json_encode($items);
    
    $stmt = $pdo->prepare('INSERT INTO parts_orders (user_email, items, total) VALUES (?, ?, ?)');
    $stmt->execute([$user_email, $itemsJson, $total]);
    
    echo json_encode(['success' => true]);
    exit;
}
?>
