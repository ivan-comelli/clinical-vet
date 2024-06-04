import { View, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendario';
import { Text } from 'react-native-paper';

const ReserveTurn = () => {

    return (
        <View style={{flex: 1, width: 500}}>
            <ScrollView style={{flex: 1}}  onScroll={event => console.log(event)}>
                <Calendar 
                    onPress={(range) => console.log(range)}
                    disableRange	
                    numberOfMonths={2}
                    locale="es"
                    showsVerticalScrollIndicator={false}
                    theme={{
                        activeDayColor: "#6d95da",
                        monthTitleTextStyle: {
                        color: '#6d95da',
                        fontWeight: '300',
                        fontSize: 16,
                        },
                        emptyMonthContainerStyle: {},
                        emptyMonthTextStyle: {
                        fontWeight: '200',
                        },
                        weekColumnsContainerStyle: {},
                        weekColumnStyle: {
                        paddingVertical: 10,
                        },
                        weekColumnTextStyle: {
                        color: '#b6c1cd',
                        fontSize: 13,
                        },
                        nonTouchableDayContainerStyle: {},
                        nonTouchableDayTextStyle: {},
                        startDateContainerStyle: {},
                        endDateContainerStyle: {},
                        dayContainerStyle: {},
                        dayTextStyle: {
                        color: '#2d4150',
                        fontWeight: '200',
                        fontSize: 15,
                        },
                        dayOutOfRangeContainerStyle: {},
                        dayOutOfRangeTextStyle: {},
                        todayContainerStyle: {},
                        todayTextStyle: {
                        color: '#6d95da',
                        },
                        activeDayContainerStyle: {
                        backgroundColor: '#6d95da',
                        },
                        activeDayTextStyle: {
                        color: 'white',
                        },
                        nonTouchableLastMonthDayTextStyle: {},
                    }}
                />
            </ScrollView>
            <View style={{flex: 1}}>
                <Text variant='titleLarge'>Lista de horarios disponibles</Text>
            </View>
        </View>
        
    )
}

export default ReserveTurn