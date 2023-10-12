import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
    // GET /ninjas---> []
    @Get()
    getNinjas(){
        return ['hello', 'world']
    };
    // get single
    @Get(':id')
    getOneNinja(@Param('id') id:string){
        return 'single user' + id
    }
    // post 
    @Post()
    CreateNinja(){
        return 'posted ninja'
    }
    // PUT
    @Put(':id')
    updateNinja(@Param('id') id:string){
        return {id}
    }

    // delete
    @Delete(':id')
    removeNinja(@Param('id') id:string){
        return 'delete ninja'
    }
}


