/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/java.ts" />
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
    experienceTeachingReact: 0,
    experienceTeachingJava: 0,
};
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBDQUEwQztBQUMxQyw0Q0FBNEM7QUFDNUMsMkNBQTJDO0FBRTNDLElBQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRW5DLElBQU0sUUFBUSxHQUFxQjtJQUNqQyxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLG1CQUFtQixFQUFFLEVBQUU7SUFDdkIsdUJBQXVCLEVBQUUsQ0FBQztJQUMxQixzQkFBc0IsRUFBRSxDQUFDO0NBQzFCLENBQUM7QUFFRixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9zdWJqZWN0cy9DcHAudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvUmVhY3QudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc3ViamVjdHMvamF2YS50c1wiIC8+XG5cbmNvbnN0IGNwcCA9IG5ldyBTdWJqZWN0cy5DcHAoKTtcbmNvbnN0IGphdmEgPSBuZXcgU3ViamVjdHMuSmF2YSgpO1xuY29uc3QgcmVhY3QgPSBuZXcgU3ViamVjdHMuUmVhY3QoKTtcblxuY29uc3QgY1RlYWNoZXI6IFN1YmplY3RzLlRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGV4cGVyaWVuY2VUZWFjaGluZ0M6IDEwLFxuICBleHBlcmllbmNlVGVhY2hpbmdSZWFjdDogMCxcbiAgZXhwZXJpZW5jZVRlYWNoaW5nSmF2YTogMCxcbn07XG5cbmNwcC5zZXRUZWFjaGVyKGNUZWFjaGVyKTtcbmphdmEuc2V0VGVhY2hlcihjVGVhY2hlcik7XG5yZWFjdC5zZXRUZWFjaGVyKGNUZWFjaGVyKTtcblxuY29uc29sZS5sb2coY3BwLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGNwcC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG5jb25zb2xlLmxvZyhqYXZhLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuY29uc29sZS5sb2cocmVhY3QuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2cocmVhY3QuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==