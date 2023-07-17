// KNIGHT OU SORCERER 
// LITTLEMONSTER OU BIGMONSTER

class Character {

    _life = 1;
    maxLife = 1; //não foi colocado tudo 0, pro personagem não começar morto 
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name 
    }

    //fazendo a verificação para não deixar a vida do boneco menor do que 0 
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