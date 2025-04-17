const circle = (r) => {
    const Phi = 3.14;
    const luas = Phi * r * r;
    const keliling = 2 * Phi * r;

    console.log(`Luas Lingkaran adalah: ${luas}`);
    console.log(`Keliling Lingkaran adalah: ${keliling}`);
};

circle(7)
circle(15)