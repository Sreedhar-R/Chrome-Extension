import React, { Component } from 'react';
import {quotes,backgrounds} from './data';
import '../styles/App.css' ;



class App extends Component {

    timeTimer;
    tempTimer;

    quote = quotes[Math.floor(Math.random()*quotes.length)]
    background = backgrounds[Math.floor(Math.random()*backgrounds.length)];

    constructor(){
        super();
        this.state = {
            name:'',
            query:'',
            todo:{},
            todoTitle:'',
            onboard:false,
            temp:'',
            time:'',
            city:''
        }
    }

    fetchTime = () => {
        let d = new Date() ;
        let time = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
        console.log(time);
        this.setState({time});
    }

    fetchTemp = async() => {
        const ipJsonResp = await fetch('https://api.ipify.org/?format=json');
        const ipObj = await ipJsonResp.json();
        console.log(ipObj.ip);

        const cityJsonResp = await fetch(`https://api.ipinfodb.com/v3/ip-city/?key=f767493ed02b334854451e59119c0d4b52d13962686701b96df91a315a86d236&ip=${ipObj.ip}&format=json`);
        const cityObj = await cityJsonResp.json();
        this.setState({city : cityObj.cityName});
        console.log(cityObj.cityName);

        const tempJsonResp = await fetch(`http://api.weatherstack.com/current?access_key=85eced8e03eb0542a49b547653636cd1&query=${cityObj.cityName}`);
        const tempObj = await tempJsonResp.json();
        let temp = tempObj.current.temperature;
        this.setState({temp});
    }

    componentDidMount = async() => {
        let name = localStorage.getItem("name");
        let todo = localStorage.getItem("todo");

        if ( name!== null) {
            await this.setState({onboard : true,name:name});
        }

        if (todo!==null) {
            await this.setState({todo : JSON.parse(todo)});
        }
        this.fetchTime();
        this.timeTimer = setInterval(this.fetchTime,60000); 

        // this.fetchTemp();
        // this.tempTimer = setInterval(this.fetchTemp,3600000)
    }

    componentWillUnmount = () => {
        clearInterval(this.timeTimer);
        clearInterval(this.tempTimer);
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'query'){
            this.setState({query:value})
        }else if(name === 'todo'){
            this.setState({todoTitle: value})
        }else if(name === 'name'){
            this.setState({name: value})
        }
    }

    nameAdd = (e) => {
        e.preventDefault() ;
        if(this.state.name !== ''){
            this.setState({onboard : true})
        }
        localStorage.setItem('name',this.state.name);
    }

    searchQuery = (e) => {
        e.preventDefault();
        if(this.state.query != ''){
            let url = `https://www.google.com/search?q=${this.state.query}`;
            window.open(url,'_self')
        }
    }

    todoAdd = async(e) => {
        e.preventDefault();
        if(this.state.todo.title == null && this.state.todoTitle !== ''){
            let todo = {title:this.state.todoTitle, isDone:false};
            await this.setState({ todo: todo });
        }
        localStorage.setItem('todo', JSON.stringify(this.state.todo))
    }

    toggleTodo = async() => {
        let todoNew = {...this.state.todo};
        todoNew.isDone = !todoNew.isDone;
        await this.setState({todo:todoNew});
        localStorage.setItem('todo', JSON.stringify(this.state.todo))
    }

    deleteTodo = async() => {
        await this.setState({todo : {}}) ;
        localStorage.setItem('todo', JSON.stringify(this.state.todo))
    }

    render() {
        return (
            <div className="mainBackground">
                <img src={this.background} alt="Background_image" className="png"/>
                {this.state.onboard?
                (
                <div className="mainBox">
                    <div className="header">
                        <div>
                            <form onSubmit={this.searchQuery}>
                                <i className="fas fa-search"></i>
                                <input type="text" className="google_search" name="query" onChange={this.handleChange} value={this.state.query}/>
                            </form>
                        </div>
                        <div className="temperature">
                            <span>{this.state.temp}<sup>o</sup></span>
                            <div className="cityName">
                            {this.state.city}
                            </div>
                        </div>
                    </div>

                    <div className="center">
                        <div className="center--time">{this.state.time}</div>
                        <div className='center--personal_line'>You Matter,{this.state.name}</div>
                        {this.state.todo.title == null ?
                        (
                            <>
                                <div className='center--asking_line'>What is your main focus today?</div>
                                <form onSubmit={this.todoAdd}> 
                                    <input type="text" className="todoInput" name="todo" onChange={this.handleChange} value={this.state.todoTitle}/>
                                </form>
                            </>
                        )
                        :
                        (
                            <>
                                <div className='todo_headtext'>Your main focus TODAY</div>
                                <div className='todo--mainBlock'>
                                    <input type="checkbox" checked = {this.state.todo.isDone} className='checkbox' onClick={this.toggleTodo}/>
                                    <div className='todo--title' style={this.state.todo.isDone ? {textDecoration : 'line-through'} : {}}>{this.state.todo.title}</div>
                                    <i class="fas fa-times" onClick={this.deleteTodo}></i>
                                </div>
                            </>
                        )
                        }
                    </div>

                    <div className="footer">
                        <div>
                            Sreedhar R, Creator
                        </div>
                        <div className='footer--quote'>
                            {this.quote}
                        </div>
                        <div>
                            @newtanian
                        </div>
                    </div>
                </div>
                )
                :
                (
                    <div className="center">
                        <div className='center--personal_line'>What's your name?</div>
                        <form onSubmit={this.nameAdd}>
                            <input type='text' className='todoInput' name='name' onChange={this.handleChange} value={this.state.name}/>
                        </form>
                    </div>
                )
                }
            </div>
        )
    }
}

export default App
