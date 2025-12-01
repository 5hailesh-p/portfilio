const day = new Date().getDay(); 
// 0 = Sunday, 1 = Monday, ... 6 = Saturday

const colors = {
    0: "pink",      // Sunday
    1: "blue",      // Monday
    2: "yellow",    // Tuesday
    3: "green",     // Wednesday
    4: "purple",    // Thursday
    5: "orange",    // Friday
    6: "black"      // Saturday
};

document.documentElement.style
    .setProperty("--main-color", colors[day]);
