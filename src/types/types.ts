export interface WeatherResponse {
	current: ICurrent;
	location: ILocation;
}

interface ICurrent {
	condition: ICondition;
	last_updated: string;
	temp_c: number;
}

interface ICondition {
	code: number;
	icon: string;
	text: string;
}

interface ILocation {
	country: string;
	name: string;
}

export interface IResponseError {
	error: {
		code: number;
		message: string;
	};
}

export interface IHandleError {
	message: string;
}
