function CheckPass()
{
  var pass1 = "fxd2vw8"
  var answer = prompt ("Please enter password to view my CV.")
  var cleanPass = DOMPurify.sanitize(answer);
  answer = cleanPass;

  if (answer == pass1)
  {
    window.location.href = "assets/Matthew_Jeffery_CV_2017.pdf"
  }
  else
  {
    confirm ("Please contact me for a password if you wish to view my CV.")
  }
}
