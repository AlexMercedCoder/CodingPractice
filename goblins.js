//GOBLIN CODING CHALLENGE

const goblins = [];
const curedGoblins1 = [];
const curedGoblins2 = [];
const curedGoblins3 = [];
const curedGoblins4 = [];

//100 SICK GOBLINS APPEAR IN A LINE
for (i=0; i < 100; i++){
    goblins[i]=false;
}


//THE CURED GOBLINS
for (i=0; i < 100; i++){
    if (goblins[i]){
        curedGoblins1.push(i)
    }
}

console.log(curedGoblins1)

//THE CURE IS GIVEN TO ALL 100
for (i=0; i < 100; i++){
    goblins[i]=true;
}

//THE CURED GOBLINS
for (i=0; i < 100; i++){
    if (goblins[i]){
        curedGoblins2.push(i)
    }
}

console.log(curedGoblins2)

//REMOVE THE CURE FROM EVERY SECOND STARTING WITH GOBLIN TWO
let twocounter = 1
for (y=1;y<100;y++)
    if (y==1){
    goblins[y] = false
    }else{    if(twocounter >= 2){
        goblins[y] = !goblins[y];
        twocounter=1
        }else {
        twocounter++
        }}


//THE CURED GOBLINS
for (i=0; i < 100; i++){
    if (goblins[i]){
        curedGoblins3.push(i)
    }
}

console.log(curedGoblins3)

//Every 3rd, every 4, every 5th... goblin gets swapped
for (i=2;i<100;i++){
    let counter = 1;
    for (y=i;y<100;y++)
        if (y==i){
        goblins[y] = !goblins[y];
    }else{
        if(counter >= i+1){
        goblins[y] = !goblins[y];
        counter=1
        }else {
        counter++
        }
    }

    // console.log(goblins)
}


//THE CURED GOBLINS
for (i=0; i < 100; i++){
    if (goblins[i]){
        curedGoblins4.push(i+1)
    }
}

console.log(curedGoblins4)
