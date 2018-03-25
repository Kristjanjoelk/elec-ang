export class Member {
        public name: string;
        public totalPoints: number;
        public pointDistribution: {
            geography: number,
            entertainment: number,
            history: number,
            artsLiterature: number,
            scienceNature: number,
            sportsLeisure: number
        }
    
        constructor (member: any) {
            this.name = member.name;
            this.totalPoints = member.totalPoints;
            this.pointDistribution = member.pointDistribution;
        }
}