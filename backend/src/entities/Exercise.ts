import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Progression } from "./Progression";

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column("text")
  description: string;

  @Column()
  difficulty: "beginner" | "intermediate" | "advanced" | "expert";

  @Column({ nullable: true })
  videoUrl: string;

  @Column({ nullable: true })
  imageUrl: string;

  // One Exercise can be a progression for many target exercises
  @OneToMany(() => Progression, (progression) => progression.exercise)
  progressions: Progression[];

  // One Exercise can be the target of many progression exercises
  @OneToMany(() => Progression, (progression) => progression.targetExercise)
  progressionTargets: Progression[];
}
