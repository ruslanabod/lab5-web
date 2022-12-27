
            setInterval(changeColor, 1000);

            var currentColor = 0;

            function changeColor()
            {
                if (currentColor == 0)
                {
                    document.body.style.backgroundColor = "white";
                    currentColor++;
                }
                else if (currentColor == 1)
                {
                    document.body.style.backgroundColor = "black";
                    currentColor = 0;
                }
            }