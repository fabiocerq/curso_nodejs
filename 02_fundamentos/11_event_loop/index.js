//Node executar uma linha por vez, de cima para baixo

function a() {
    console.log("Executando a()")
};

function b() {
    console.log("Executando b()")
};

function c() {
    console.log("Executando c()")
};

function d() {
    console.log("Executando d()")
    a()
    b()
    c()
};

d();
