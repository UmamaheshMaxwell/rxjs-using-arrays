import $ from 'jQuery';
import Rx from 'rxjs/Rx';

const numbers = [33, 44, 55, 66, 77]

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
	value => {
		console.log(value)
	},
	error => {
		console.log(error)
	},
	complete => {
		console.log('completed')
	}
)

const posts = [
	{name : 'Uma', city: 'Bengaluru', title: 'Technical Project Manager'},
	{name : 'Gowda', city: 'Peenya', title: 'Senior MEAN Stack Developer'},
	{name : 'Sundar', city: 'Mysore', title: 'Solution Architect'},
	{name : 'KP', city: 'Managlore', title: 'Tech Lead'}
]

const posts$ = Rx.Observable.from(posts);

posts$.subscribe(
	post => {
		console.log(post)
		$('#posts').append('<h3>' + post.name+ '</h3>' + '<li>'+post.title+'</li>')
	}
)

const set = new Set(['Uma', 35, {message: 'anybody can code'}]);

const set$ = Rx.Observable.from(set);

set$.subscribe(
	value => {
		console.log(value);
	},
	error => {
		console.log(error)
	},
	() => {
		console.log('Completed')
	}
);

const map = new Map([ [1,2], [2,3], [3,4]]);

const map$ = Rx.Observable.from(map);

map$.subscribe(
	value => {
		console.log(value);
	},
	error => {
		console.log(error);
	},
	() => {
		console.log('Completed');
	}
)