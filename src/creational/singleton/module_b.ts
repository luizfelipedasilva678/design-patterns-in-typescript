import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';
const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 30 });
myDatabaseClassic.add({ name: 'EDuardo', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 30 });

myDatabaseClassic.remove(1);
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
