export default function Circle({shape, number}) {
   
    return (
        <div style={{
            width: 100 + 'px',
            height: 100 + 'px',
            backgroundColor: 'limegreen',
            margin: '20px',
            transition: 'all 0.5s',
            borderRadius: shape + '%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {number}
        </div>
    );
}