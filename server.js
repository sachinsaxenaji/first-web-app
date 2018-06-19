var express = require('express');
var app = express();

var port = 3001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server started at' + port);

app.post('/api/login', function (req, res){
	var results =[
	{
	title: "Java",
	instructor: "Sachin",
	level: "Begineer",
    totalVideo: 10 },
	{
	title: "c++",
	instructor: "Ankush",
	level: "Begineer",
    totalVideo: 15},
	{
	title: "Android",
	instructor: "Sudhanshu",
	level: "Begineer",
    totalVideo: 14 },
    {
	title: "Android",
	instructor: "Sudhanshu",
	level: "Begineer",
    totalVideo: 14 },
    {
	title: "Android",
	instructor: "Sudhanshu",
	level: "Begineer",
    totalVideo: 14 },
    {
	title: "Android",
	instructor: "Sudhanshu",
	level: "Begineer",
    totalVideo: 14 },
     {
	title: "Android",
	instructor: "Sudhanshu",
	level: "Begineer",
    totalVideo: 14 },
    {
	title: "Android",
	instructor: "Sudhanshu",
	level: "Begineer",
    totalVideo: 14 },
	{
	title: "WebDovelopment",
	instructor: "pingakash",
	level: "Begineer",
    totalVideo: 13 }
];
res.json(results);
})