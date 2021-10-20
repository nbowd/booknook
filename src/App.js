import './App.css';
import SearchBar from './components/SearchBar';
import Button from './components/Button';
import Card from './components/Card';
import fakebook from './fakebook.jpeg'

function App() {

    return <div>
        <SearchBar />
        <Button />
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
        </div>
    </div>
}

export default App;