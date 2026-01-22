
let grid;

        function saveLayout() {
        const layout = grid.save(false);  // 'false' means save full layout with content
        localStorage.setItem("gridLayout", JSON.stringify(layout));
        alert("Layout saved!");
    }

    function resetLayout() {
        localStorage.removeItem("gridLayout");
        location.reload();
        alert("Layout reset!");
    }

document.addEventListener("DOMContentLoaded", function () {
    // grid = GridStack.init({
    //     float: false,
    //     //cellHeight: '120px',
    //     margin: 5,
    //     staticGrid: true
    // });

        const grid = GridStack.init({
      cellHeight: 80,
      margin: 5,
      float: false,
      disableOneColumnMode: false, // important for mobile
      oneColumnSize: 768,           // breakpoint for stacking
       staticGrid: true
    });

    window.grid = grid; // optional (useful for debugging)


    //Load saved layout if available local first and then from server (number of devices)
    let savedLayout = localStorage.getItem("gridLayout");

    // if (!savedLayout) {
    //     fetch('/load-layout')
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.layout) {
    //                 savedLayout = data.layout;
    //             }
    //         });
    // }

    if (savedLayout) {
        try {
            const layout = JSON.parse(savedLayout);
            grid.load(layout);
        } catch (e) {
            console.error("Invalid layout data", e);
        }
    }





    const clock = new FlipClock(document.getElementById('flip-clock'), {
        clockFace: 'TwentyFourHourClock',
        showSeconds: true
    });


    const toggle = document.getElementById('darkModeToggle');
    //const body = document.body;

    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode === null ? true : savedMode === 'true'

    // Set dark mode as default
    toggle.checked = isDarkMode;
    document.body.classList.toggle('dark-mode', toggle.checked);
    //body.classList.add('dark-mode');

    toggle.addEventListener('change', function () {
        const isDark = this.checked;
        localStorage.setItem('darkMode', isDark);
        document.body.classList.toggle('dark-mode', isDark);

    });


});