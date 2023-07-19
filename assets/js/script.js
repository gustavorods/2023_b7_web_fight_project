let char = new Knight("bonieky");
let monster = new LittlerMonster();

const stage = new Stage (
    char,    //enviando as informações
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
);

stage.start();
