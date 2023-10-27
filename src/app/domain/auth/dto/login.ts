export interface Login {
  access_token: string,
	user: {
		name: string,
		last_name: string,
		role: number
	}
}
