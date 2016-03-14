var me = new Person( 'Vladi', 25 );

console.log( me.name );                // "Vladi"
console.log( me.age, me._age );        // undefined, undefined
me.introduce();                        // logs "Hi, I am Vladi, 25"
console.log( typeof me.getAge );       // undefined