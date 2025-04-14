import { Carousel } from 'react-bootstrap';
import StatWidget from '../ui/StatWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WidgetsCarousel({ data }) {
    // Разбиваем виджеты по 3 штуки на слайд
    const chunkSize = 3;
    const chunks = Object.entries(data).reduce((acc, item, i) => {
        const chunkIndex = Math.floor(i / chunkSize);
        if (!acc[chunkIndex]) acc[chunkIndex] = [];
        acc[chunkIndex].push(item);
        return acc;
    }, []);

    return (
        <Carousel indicators={false}>
            {chunks.map((chunk, idx) => (
                <Carousel.Item key={idx}>
                    <div className="d-flex justify-content-space-between gap-3 py-3">
                        {chunk.map(([title, widget], i) => (
                            <div key={i} style={{ flex: 1 }}>
                                <StatWidget title={title} data={widget} />
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
