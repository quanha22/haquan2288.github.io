<!DOCTYPE html>
<html>
<head>
<title>EducationalSimulation</title>
<meta http-equiv='Content-Type' content='text/html;charset=utf-8' />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<style>
#divMyGame canvas:focus { outline: none;background-color: #000;}
#divMyGame canvas { outline: none;background-color: #000;}
.CssTable{background-color:#050505; text-align:center; width:100%; border: 1px solid teal; }
.CssTable td{ border: 1px solid chartreuse; }
.btn {background-color: #4CAF50; /* Green */border: none;color: white;padding: 16px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;transition-duration: 0.4s;cursor: pointer;}
.btn1 {background-color: white; color: black; border: 2px solid #4CAF50;}
.btn1:hover {background-color: #4CAF50;color: white;}
.btn2 {background-color: white; color: black; border: 2px solid #008CBA;}
.btn2:hover {background-color: #008CBA;color: white;}
body{ background-color:#222; margin:0; padding:0;}
</style>
</head>
<body>
    <table class='CssTable'>
        <tr><td id='divMyGame'></td></tr>
        <tr>
            <td>
                <input type="button" class="btn btn1" value="FullScreen" onclick="_Game.Fullscreen();" />
                <input type="button" class="btn btn1" value="Full Width" onclick="_Full_Width();" />
                <input type="button" class="btn btn1" value="Full Height" onclick="_Full_Height();" />
                <input type="button" class="btn btn1" value="Reset Size" onclick="_Reset_Size();" />
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" class="btn btn2" value="Restart Game" onclick="_Game.Start(divMyGame);" />
            </td>
        </tr>
    </table>

    <script type='text/javascript' src='EducationalSimulation.js?v=998'></script>

    <script>
            _Game.Start(divMyGame);
            function _Full_Width() {
                divMyGame.firstChild.style.width = "100%";
                divMyGame.firstChild.style.height = "";
                divMyGame.scrollIntoView();
            }
            function _Full_Height() {
                divMyGame.firstChild.style.height = "99vh";
                divMyGame.firstChild.style.width = "";
                divMyGame.scrollIntoView();
            }
            function _Reset_Size() {
                divMyGame.firstChild.style.width = "";
                divMyGame.firstChild.style.height = "";
                divMyGame.scrollIntoView();
            }
    </script>
</body>
</html>![Img1__0](https://user-images.githubusercontent.com/77852973/110065644-a5055800-7d3d-11eb-964a-4c574247ff6a.png)
![Img1__1](https://user-images.githubusercontent.com/77852973/110065645-a59dee80-7d3d-11eb-9603-296a4bf0a08f.png)
![Img1__2](https://user-images.githubusercontent.com/77852973/110065646-a59dee80-7d3d-11eb-9975-8fe6bd235e39.png)
![Img1__3](https://user-images.githubusercontent.com/77852973/110065648-a59dee80-7d3d-11eb-9f4d-5632d83f4e7a.PNG)
![Img1__4](https://user-images.githubusercontent.com/77852973/110065649-a59dee80-7d3d-11eb-8a14-8731db6bab30.png)
![Img1__5](https://user-images.githubusercontent.com/77852973/110065650-a6368500-7d3d-11eb-9431-5bd8ff010527.PNG)

