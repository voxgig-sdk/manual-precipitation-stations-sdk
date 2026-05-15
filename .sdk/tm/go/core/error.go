package core

type ManualPrecipitationStationsError struct {
	IsManualPrecipitationStationsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewManualPrecipitationStationsError(code string, msg string, ctx *Context) *ManualPrecipitationStationsError {
	return &ManualPrecipitationStationsError{
		IsManualPrecipitationStationsError: true,
		Sdk:              "ManualPrecipitationStations",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ManualPrecipitationStationsError) Error() string {
	return e.Msg
}
