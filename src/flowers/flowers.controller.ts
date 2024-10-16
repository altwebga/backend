import {
	Body,
	Controller,
	Get,
	Post,
	// UseGuards,
	// UseInterceptors,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
// import { AuthGuard } from 'src/conception/guard'
// import { LoggingInterceptor } from 'src/conception/interceptor'
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateFlowersDto } from './flowers.dto'
import { FlowersService } from './flowers.service'

@Controller('flowers')
@ApiTags('Flowers')
// @UseInterceptors(LoggingInterceptor)
export class FlowersController {
	constructor(private readonly flowersService: FlowersService) {}

	@Get()
	// @UseGuards(AuthGuard)
	findAll() {
		return this.flowersService.findAll()
	}

	@Post()
	@UsePipes(new ValidationPipe())
	// @UseGuards(AuthGuard)
	@ApiResponse({ status: 201 })
	@ApiBody({
		type: CreateFlowersDto,
		description: 'Json structure for flower object',
	})
	create(@Body() dto: CreateFlowersDto) {
		return this.flowersService.create(dto)
	}
}
