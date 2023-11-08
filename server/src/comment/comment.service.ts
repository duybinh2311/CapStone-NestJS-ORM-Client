import { Injectable } from '@nestjs/common'
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'
import { IRes } from 'src/common/types/app.types'
import { PrismaService } from 'nestjs-prisma'
import { CommentMessages } from './types/comment.messages'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { Comment } from '@prisma/client'

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto, authUser: AuthUserDto): IRes<Comment> {
    const comment = await this.prisma.comment.create({
      data: {
        ...createCommentDto,
        authorId: authUser.userId,
      },
    })

    return {
      data: comment,
      message: CommentMessages.CREATE_SUCCESS,
    }
  }

  findAll() {
    return `This action returns all comment`
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`
  }

  remove(id: number) {
    return `This action removes a #${id} comment`
  }
}
