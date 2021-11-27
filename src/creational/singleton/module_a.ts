import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Pedro', age: 30 });
myDatabaseClassic.add({ name: 'Eduardo', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 30 });

myDatabaseClassic.remove(1);
myDatabaseClassic.show();

export { myDatabaseClassic };
