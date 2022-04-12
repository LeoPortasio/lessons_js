function recursiva(max) {
    // console.log(max); se queremos imprimir de 0 a 10 
    if (max >= 10000) return;
    max++;
    console.log(max); // imprime a partir do 1 até 10
    recursiva(max);
}
recursiva(0);







