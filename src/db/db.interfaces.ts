import { Role } from '../users/users.interfaces';

export interface CreateUserInput {
    username: string;
    hashedPwd: string;
    isCurrentUser: boolean;
    firstName: string;
    lastName: string;
    lineID: string;
    role: Role;
    imageUrl: string;
    hid: number;
}

export interface UserDataOutput {
    uid: string;
    username: string;
    hashedPwd: string;
    isCurrentUser: boolean;
    firstName: string;
    lastName: string;
    role: Role;
    imageUrl: string;
    hid: number;
}

export interface LoginUserInfo {
    hno: number;
    imageUrl: string;
    role: Role;
}

export interface CreateChickenFlockInput {
    dateIn: string;
    dateOut: string;
    generation: string;
    type: string;
    amountIn: number;
    gender: string;
    hid: number;
}

export interface CreateCameraInput {
    cid: string;
    cno: number;
    hid: number;
    xPosCam: number;
    yPosCam: number;
}

export interface CreateSensorInput {
    sid: string;
    hid: number;
    xPosSen: number;
    yPosSen: number;
}

export interface CreateChickenRecordInput {
    chicTime: string;
    period: string;
    amountDead: number;
    amountZleg: number;
    amountDwaft: number;
    amountSick: number;
    date: string;
    hid: number;
}

export interface CreateFoodRecordInput {
    foodSilo: number;
    foodIn: number;
    foodRemain: number;
    foodConsumed: number;
    timestamp: string;
    date: string;
    hid: number;
}

export interface CreateDailyDataRecordInput {
    timestamp: string;
    date: string;
    hid: number;
}

export interface CreateVacRecordInput {
    vacType: string;
    vacConc: number;
    timestamp: string;
    date: string;
    hid: number;
}

export interface CreateWaterRecordInput {
    waterMeter1: number;
    waterMeter2: number;
    waterConsumed: number;
    timestamp: string;
    date: string;
    hid: number;
}

export interface CreateEnvDataInput {
    timestamp: string;
    windspeed: number;
    ammonia: number;
    temperature: number;
    humidity: number;
    sid: string;
}

export interface CreateCamImgInput {
    timestamp: string;
    url: string;
    amountDead: number;
    cid: string;
}

export interface EnvironmentOutput {
    windspeed: number;
    ammonia: number;
    temperature: number;
    humidity: number;
}

export interface LatestUrl {
    url: string;
}

export interface GetChickenFlockInfoOutput {
    dateIn: string;
    dateOut: string;
    generation: string;
    type: string;
    amountIn: number;
    gender: string;
    hid: number;
}

export interface GetEnvironmentBySidOutput {
    sid: string;
    environment: EnvironmentOutput;
}
export interface EnvironmentSetOutput {
    timestamp: string;
    windspeed: number;
    ammonia: number;
    temperature: number;
    humidity: number;
}

export interface EnvironmentBetweenTimestampOutput {
    sid: string;
    environmentSet: Array<EnvironmentSetOutput>;
}

export interface LastImageForEachCameraOutput {
    cid: string;
    xPosCam: number;
    yPosCam: number;
    url: string;
    amountDead: number;
}

export interface UpdateFoodRecordInput {
    timestamp: string;
    date: string;
    hid: number;
    newfoodSilo: number;
    newfoodIn: number;
    newfoodRemain: number;
    newfoodConsumed: number;
}
