// clone
const house1 = house.clone();
house1.position.set(300, 0, 0);
scene.add(house1);
// clone2
const house2 = house.clone();
house2.position.set(-300, 0, 0);
scene.add(house2);
// clone3
const house3 = house.clone();
house3.position.set(0, 0, -350);
scene.add(house3);

// clone4
const house4 = house.clone();
house4.position.set(300, 0, -350);
scene.add(house4);

// clone5
const house5 = house.clone();
house5.position.set(-300, 0, -350);
scene.add(house5);
