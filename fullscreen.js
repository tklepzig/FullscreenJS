var fullscreen = (function ()
{
    var module = {};

    module.isFullscreenSupported = function ()
    {
        return document.mozFullScreenEnabled
            || document.fullscreenEnabled
            || document.webkitFullscreenEnabled
            || document.msFullscreenEnabled;
    };

    module.isFullscreen = function ()
    {
        var fullScreenElement = document.webkitFullscreenElement || document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        return fullScreenElement != null;
    };

    module.request = function (element)
    {
        if (module.isFullscreenSupported)
        {
            if (element.requestFullscreen)
                element.requestFullscreen();

            else if (element.webkitRequestFullscreen)
                element.webkitRequestFullscreen();

            else if (element.msRequestFullscreen)
                element.msRequestFullscreen();

            else if (element.mozRequestFullScreen)
                element.mozRequestFullScreen();
        }
    };

    module.exit = function ()
    {
        if (module.isFullscreenSupported)
        {
            if (document.exitFullscreen)
                document.exitFullscreen();

            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();

            else if (document.msExitFullscreen)
                document.msExitFullscreen();

            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen();
        }
    };

    module.toggle = function (element)
    {
        if (!module.isFullscreen())
            module.request(element);
        else
            module.exit(element);
    };

    return module;
})();