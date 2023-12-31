<?php
include('connection.php');

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$class_id = $data["class_id"];

$query = $mysqli->prepare(
    "SELECT a.assignment_id, a.assignment_name, a.assignment_name,a.assignment_paragraph,a.assignment_description,a.assignment_date,u.user_firstname,u.user_lastname
    FROM assignments a
    JOIN `users` u ON u.user_id = a.teacher_id
    WHERE a.class_id = ?;"
);

$query->bind_param('s', $class_id);
$query->execute();
$result = $query->get_result();
$assignment = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($assignment);
?>