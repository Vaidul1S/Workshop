export default function Square({color}) {
   
    return (
        <div style={{
            width: 50 + 'px',
            height: 50 + 'px',
            backgroundColor: color,
            borderRadius: '3px',
            margin: '20px',
            transition: 'all 0.5s',            
        }}>
        </div>
    );
}