export default function ZaB({color}) {
    if (color === 1) {
        color = 'blue';
    } else {
        color = 'red';
    }

    return (
    <h3 style={{
        color: color
    }}>Zebrai ir Bebrai</h3>
    )
}