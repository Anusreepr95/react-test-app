const heading = React.createElement('div',{id:'head'},
[React.createElement('h2',{id:'child2'},
'im child 1'
),
React.createElement('h2',{id:'child3'},
'im child 2'
)
]
);
const root = ReactDOM.createRoot(document.getElementById('root-container'));
root.render(heading);