import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import SuperBelHeader from '../components/SuperBelHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams[0]}</Text>
        <Text style={styles.teamsSecond}>{teams[1]}</Text>
      </View>

      <Text style={styles.matchTime}>{time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SuperBelHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NBA', '12.01 19:00', [
          'Los Angeles Lakers',
          ' Chicago Bulls',
        ])}

        {renderBroadcast('UEFA', '15.01 21:30', [
          'Real Madrid',
          ' Paris Saint-Germain',
        ])}

        {renderBroadcast('NFL', '18.02 20:15', [
          'Dallas Cowboys',
          'Green Bay Packers',
        ])}

        {renderBroadcast('NHL', '20.02 22:00', [
          'Toronto Maple Leafs',
          'Boston Bruins',
        ])}

        {renderBroadcast('MLB', '25.02 18:45', [
          'New York Yankees',
          'Boston Red Sox',
        ])}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 40,
    borderColor: 'rgba(19, 55, 141, 0.3)',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.main,
    textAlign: 'left',
    paddingBottom: 10,
  },
  leagueContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '65%',
  },
  matchTime: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    top: -25,
    backgroundColor: COLORS.main,
    borderRadius: 8,
  },
  teams: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.black,
    fontSize: 17,
    color: COLORS.black,
    marginLeft: 5,
    height: 45,
  },
  teamsSecond: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.black,
    fontSize: 17,
    color: COLORS.black,
    marginLeft: 5,
    height: 45,
    borderBottomRightRadius: 12,
  },
});
