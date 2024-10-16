import { INestApplication, ValidationPipe } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'

describe('FlowersController (e2e)', () => {
	let app: INestApplication

	beforeAll(async () => {
		const moduleMixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile()

		app = moduleMixture.createNestApplication()
		app.useGlobalPipes(new ValidationPipe())
		await app.init()
	})

	it('/flowers (GET)', () => {
		return request(app.getHttpServer())
			.get('/flowers')
			.expect(200)
			.expect([
				{
					id: 1,
					name: 'Rose',
					color: 'Red',
					price: 10,
					createdAt: '2024-07-18T02:50:57.257Z',
					updatedAt: '2024-07-18T02:50:57.257Z',
				},
				{
					id: 2,
					name: 'Lily',
					color: 'White',
					price: 12,
					createdAt: '2024-07-18T02:51:18.218Z',
					updatedAt: '2024-07-18T02:51:18.218Z',
				},
				{
					id: 3,
					name: 'Tulip',
					color: 'Yellow',
					price: 5,
					createdAt: '2024-07-18T02:51:27.780Z',
					updatedAt: '2024-07-18T02:51:27.780Z',
				},
			])
	})

	it('/flowers (POST)', () => {
		return request(app.getHttpServer())
			.post('/flowers')
			.send({
				name: 'Sunflower',
				color: 'Yellow',
				price: 8,
			})
			.expect(201)
			.expect(response => {
				return response.body.name === 'Sunflower'
			})
	})

	afterAll(async () => {
		await app.close()
	})
})
