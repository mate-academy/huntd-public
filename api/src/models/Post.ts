import {
  Table,
  Column,
  DataType,
  DeletedAt,
  BelongsTo,
  AllowNull,
  ForeignKey,
  Index,
} from 'sequelize-typescript';
import { RecruiterProfile } from '@/models/RecruiterProfile';
import { ModelBase } from '@/models/ModelBase';

@Table({
  tableName: 'Posts',
  paranoid: true,
})
export class Post extends ModelBase<Post> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'short_description',
  })
  shortDescription: string;

  @Index('posts_recruiter_id')
  @ForeignKey(() => RecruiterProfile)
  @AllowNull(false)
  @Column({
    field: 'recruiter_id',
  })
  recruiterId: number;

  @BelongsTo(() => RecruiterProfile)
  recruiter: RecruiterProfile

  @DeletedAt
  @Column({
    field: 'deleted_at',
    type: DataType.DATE,
  })
  deletedAt: Date;
}
