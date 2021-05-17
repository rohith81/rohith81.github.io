<?php
	$message = '';
		if(isset($_POST["name"])){
			$message = '
				<h3 align="center">Clients DETAILS</h3>
				<table border="1" width="100%" cellpadding="5" cellspacing="5">
					<tr>
						<td width="30%">Name</td>
						<td width="70%">'.$_POST["name"].'</td>
					</tr>
					<tr>
						<td width="30%">Email Address</td>
						<td width="70%">'.$_POST["email"].'</td>
					</tr>
				
					<tr>
						<td width="30%">Subject</td>
						<td width="70%">'.$_POST["subject"].'</td>
					</tr>
					<tr>
						<td width="30%">Message</td>
						<td width="70%">'.$_POST["message"].'</td>
					</tr>
				</table>
			';
			$email = $_POST["email"];
			require '../class/class.phpmailer.php';
		$mail = new PHPMailer();
//$mail->IsSMTP();
$mail->SMTPAuth = true;

//	===================================================================
//	JUST EDIT BELOW FIVE LINES
//	===================================================================
    $mail->Host = "mail.rohithzone.com";					// Enter "mail.my-domain.com"
	$mail->Username = "admin@rohithzone.com";			// Enter an email address created through cPanel
	$mail->Password = "rohith81";						// Enter the email password created through cPanel
	$mail->AddAddress("gujjarohith81@gmail.com", "Rohith Zone"); // Enter the recipient "to" email address
	$mail->Subject = "Clients Details";	//or subject "Any Preferred Email Subject";
//	===================================================================
//  DO NOT EDIT BELOW THIS ~~ MODIFY AT YOUR OWN RISK & DO NOT CONTACT SUPPORT
//  IF YOU NEED HELP, GOOGLE AND LEARN ABOUT PHPMAILER OR CONTACT A PROGRAMMER
//	===================================================================

$mail->From = $email;
$mail->FromName = $name;
$mail->WordWrap = 50;
$mail->IsHTML(true);
$mail->Body = $message;
$mail->AltBody ="Name    : {$name}\n\nEmail   : {$email}\n\nMessage : {$message}";
$mail->SMTPDebug  = 0;	




			if($mail->Send()){
			echo "ok";
			}else{
			    echo "not";
			}
		}
?>