import { Producer as _Producer, KafkaClient } from 'kafka-node';
const Producer = _Producer;
const client = new KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

const sendNotification = (message) => {
    const payloads = [
        { topic: 'flight_status_updates', messages: JSON.stringify(message) }
    ];
    producer.send(payloads, (err, data) => {
        if (err) {
            console.error('Failed to send notification:', err);
        } else {
            console.log('Notification sent:', data); 
        }
    });
};

export { sendNotification };
