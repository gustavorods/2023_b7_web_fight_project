/* 
Nomes: 

Heróis: KNIGHT OU SORCERER 
Monstros: LITTLEMONSTER OU BIGMONSTER 
*/


//Criando caracteríscas
class Character {

    _life = 1;
    maxLife = 1; //não foi colocado tudo 0, pro personagem não começar morto 
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name; 
    }

    //Fazendo a verificação para não deixar a vida do boneco menor do que 0 (get e set)
    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife; /*tradução: se newLife for menor doq 0, põe(?) 0, 
                                                caso contrário(:) pode colocar a nova vida; 
                                                
                                                nova vida (newLife) = a vida restante dele. Por exemplo:
                                                ele leva um soco e sua vida vai de 100 pra 90, ele perdeu 10 de vida, 
                                                e sua nova vida é 90*/
    }
}

//Criando os "Heróis"

//Knight
class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life
    }
}

//Sorcerer
class sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this._life;
    }
}


//Criando os monstros

//Little monster 
class LittlerMonster extends Character {
    constructor() {
        super("Little Monster");
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

//BigMonster 
class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

//Cenário
class Stage {
    constructor(fighter1, fighter2, fighter1EL, fighter2EL) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2EL = fighter2EL;
    }

    // Funcação de start no jogo
    start() {
        this.update();
        // TODO: Evento de atacar 
    }
    
    update() {
        // Fighter 1 
        //Nome
        this.fighter1EL.querySelector('.name').innerHTML = this.fighter1.name; 

        //vida   
        let f1PCt = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1EL.querySelector(".lifebar .bar").style.width = `${f1PCt}%`;


        // Fighter 2 
        //Nome
        this.fighter2EL.querySelector('.name').innerHTML = this.fighter2.name;

         //vida   
         let f2PCt = (this.fighter2.life / this.fighter2.maxLife) * 100;
         this.fighter2EL.querySelector(".lifebar .bar").style.width = `${f2PCt}%`;
    }
}



