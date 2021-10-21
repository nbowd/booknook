import './App.css';
import Card from './components/Card';
import fakebook from './fakebook.jpeg'
import SearchControls from './components/SearchControls';

function App() {

    return <div>
        <div className="intro">
            <h1 className="title">booknook</h1>
            <SearchControls />    
        </div>
        <div className='wrapper'>
            <Card 
                cover={fakebook}
                title={'ur mom'}
                author={'lole'}
            />
            <Card 
                cover={fakebook}
                title={'ur mom'}
                author={'lole'}
            />
            <Card 
                cover={fakebook}
                title={'ur mom'}
                author={'lole'}
            />
            <Card 
                cover={fakebook}
                title={'ur mom'}
                author={'lole'}
            />
            <Card 
                cover={fakebook}
                title={'ur mom'}
                author={'lole'}
            />
        </div>
    </div>
}

export default App;