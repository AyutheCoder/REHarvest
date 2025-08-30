import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'reharvest-backend',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: 'ai-score-consumer' });

export default kafka; 