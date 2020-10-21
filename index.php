<?php 

	$username = $_POST['Username'];
	$password = $_POST['Password'];
	$phone = $_POST['Phone'];
	$tele = $_POST['Phone1'];
	if(!empty($username) && !empty($password) && !empty($phone) && !empty($tele))
	{
		$servername = "localhost";
		$usernam = "root";
		$passwor = "";
		$dbname = "sb_db";
		$conn = new mysqli($servername, $usernam, $passwor, $dbname);
		if(mysqli_connect_error())
		{
			die('Connection error('.mysqli_connect_errno().')'.mysqli_connect_error());
		}
		else
		{
			$SELECT = "SELECT phone FROM register WHERE phone = ? LIMIT 1";
			$INSERT = "INSERT INTO register(username,password,phone,tele) values (?,?,?,?)";
			$stmt = $conn->prepare($SELECT);
			$stmt->bind_param("i", $phone);
			$stmt->execute();
			$stmt->bind_result($phone);
			$stmt->store_result();
			$rnum = $stmt->num_rows;

			if($rnum==0)
			{
				$stmt->close();
				$stmt = $conn->prepare($INSERT);
				$stmt->bind_param("ssii",$username,$password,$phone,$tele);
				$stmt->execute();
 				echo("<script>window.location = 'loc.html';</script>");
				//header('Location: vari.php');
			}
			else
			{
				echo "Someone already registerd";
			}
			$stmt->close();
			$conn->close();
		}
	}
	else
	{
		echo "All Fields Are Required";
		die();
	}

?>