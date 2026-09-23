export const useRegistrationStatus = () => {
  const { mainData } = useJSONData()

  return computed(() => {
    const registration = mainData.eventInfo.registration
    if (!registration?.link || !registration.endDate) {
      return false
    }

    return new Date(registration.endDate).getTime() > Date.now()
  })
}
