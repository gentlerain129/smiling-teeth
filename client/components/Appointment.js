import React from "react";
import { Link } from "react-router-dom";
import { Eventcalendar, getJson, toast } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

function Appointment() {
  const [myEvents, setEvents] = React.useState([]);

  //   React.useEffect(() => {
  //     getJson(
  //       "https://trial.mobiscroll.com/events/?vers=5",
  //       (events) => {
  //         setEvents(events);
  //       },
  //       "jsonp"
  //     );
  //   }, []);

  const onEventClick = React.useCallback((event) => {
    toast({
      message: event.event.title,
    });
  }, []);

  const view = React.useMemo(() => {
    return {
      schedule: { type: "week" },
    };
  }, []);

  const inv = [
    {
      recurring: {
        repeat: "weekly",
        weekDays: "SU",
      },
    },
  ];

  const onEventCreateFailed = React.useCallback(() => {
    mobiscroll.toast({
      message: "Can't create event on this date",
    });
  });

  const onEventUpdateFailed = React.useCallback(() => {
    mobiscroll.toast({
      message: "Can't add event on this date",
    });
  });

  return (
    <div class="container-fluid padding">
      <div class="row text-center padding">
        <div class="col-12">
          <h3>Check Availability Here and Send an Appointment Request!</h3>
        </div>
      </div>
      <button
        class="appointment btn-custom btn-lg"
        data-toggle="collapse"
        data-target="#appointmentform"
        type="button"
      >
        Appointment Request Form
        <form id="appointmentform" class="collapse">
          <div class="form-group row">
            <label for="Name" class="col-sm-2 col-form-label">
              Full Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="Name"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputphone" class="col-sm-2 col-form-label">
              Phone
            </label>
            <div class="col-sm-10">
              <input
                type="phone"
                class="form-control"
                id="inputphone"
                placeholder="phone"
              />
              <p class="note text-left">
                * For confirmation calls and texts or Reschedule!
              </p>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputvisit" class="col-sm-2 col-form-label">
              Reason for visit
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputvisit"
                placeholder="Cleaning & Exam, Whitening, etc..."
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputschedule" class="col-sm-2 col-form-label">
              Preferred Date
            </label>
            <div class="col-sm-10">
              <input
                type="date"
                class="form-control"
                id="inputschedule"
                placeholder="MM/DD/YYYY"
              />
              <p class="note text-left">* We are open Monday - Saturday</p>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputschedule" class="col-sm-2 col-form-label">
              Preferred Time
            </label>
            <div class="col-sm-10">
              <input
                type="time"
                class="form-control"
                id="inputschedule"
                placeholder="12:00PM"
              />
              <p class="note text-left">
                * Please make sure to check hour calendar below and our hours
              </p>
            </div>
          </div>
          <button type="submit" class="btn btn-primary-warning">
            Request Appointment
          </button>
        </form>
      </button>
      <Eventcalendar
        theme="ios"
        themeVariant="light"
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        data={myEvents}
        view={{
          schedule: {
            type: "week",
            startDay: 1,
            endDay: 6,
            startTime: "09:00",
            endTime: "17:00",
            timeCellStep: 30,
            timeLabelStep: 30,
          },
        }}
        onEventClick={onEventClick}
        invalidateEvent="strict"
        invalid={inv}
        onEventCreateFailed={onEventCreateFailed}
        onEventUpdateFailed={onEventUpdateFailed}
      />
    </div>
  );
}

export default Appointment;
