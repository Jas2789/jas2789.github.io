var image = document.getElementById("redStopLight");
var yellowCar = document.getElementById("yellowCar");
var blueCar = document.getElementById("blueCar");
var winningCar = document.getElementById("WinningCar");
winningCar.style.display = 'none';
var yellowPlaceholder = 0;
var bluePlaceHolder = 0;
var raceStarted = false;

function changeLightColor()
{
    image.src = "Images/greenStopLight.png";
    image.style.width = '400px';
    image.style.width = '200px';
}
window.onload = function()
{
 alert("Please click the stop light to start the race!")   ;
};
function startRace()
{
    raceStarted = true;

    setTimeout(function () {
        var yellowSpeed = (Math.random() * 200) + yellowPlaceholder;
        var blueSpeed = (Math.random() * 210) + bluePlaceHolder;
        yellowCar.style.marginLeft = yellowSpeed + 'px';
        blueCar.style.marginLeft = blueSpeed + 'px';
        yellowPlaceholder = yellowSpeed;
        bluePlaceHolder = blueSpeed;
        var width = screen.width;

        if ( blueSpeed>= width - 100)
        {
            document.getElementById("winner").src = "Images/blueCar.jpg";
            winningCar.style.display = 'inline';
            window.alert("The blue car won! Please click the winner to restart the race!");

        }
        else if (yellowSpeed >= width - 100)
        {
            document.getElementById("winner").src = "Images/yellowCar.jpg";
            winningCar.style.display = 'inline';
            window.alert("The yellow car won! Please click the winner to restart the race!");

        }
        else
        {
            startRace();
        }
    }, 500);
}

function resetTheRace()
{
    image.src = "Images/redStopLight.png";
    image.style.width = '350px';
    image.style.width = '200px';
    winningCar.style.display = 'none';
    blueCar.style.marginLeft = 0;
    yellowCar.style.marginLeft = 0;
    bluePlaceHolder= 0;
    yellowPlaceholder=0;

}