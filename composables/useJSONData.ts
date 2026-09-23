import mainData from "../data/config.json";
import faqData from "../data/faq.json";
import scheduleData from "../data/schedule.json";
import sessionsData from "../data/sessions.json";
import speakersData from "../data/speakers.json";
import sponsorsData from "../data/sponsors.json";
import teamData from "../data/team.json";
import cocData from "../data/coc.json";
import navbarData from "../data/navbar.json";
import type { EventConfig, Session, ScheduleDay, Speaker, SponsorCategory, TeamMember } from "../types";

export const useJSONData = () => ({
  mainData: mainData as EventConfig,
  faqData,
  scheduleData: scheduleData as ScheduleDay[],
  sessionsData: sessionsData as Session[],
  speakersData: speakersData as Speaker[],
  sponsorsData: sponsorsData as SponsorCategory[],
  teamData: teamData as TeamMember[],
  cocData,
  navbarData,
});
