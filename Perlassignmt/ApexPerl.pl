#!/usr/bin/perl

use DBI;

$dbh = DBI->connect("dbi:SQLite:perlsqlite.db") || die "Cannot connect";

$dbh->do("create table people (first_name, last_name, home)");

$dbh->do("insert into people values('Rose', 'Tyler', 'Earth')");
$dbh->do("insert into people values('Zoe', 'Heriot', 'Space Station W3')");
$dbh->do("insert into people values('Jo', 'Grant', 'Earth')");
$dbh->do("insert into people values('Leela', 'N/A', 'Unspecified')");
$dbh->do("insert into people values('Romana', 'N/A', 'Gallifrey')");
$dbh->do("insert into people values('Clara', 'Oswald', 'Earth')");
$dbh->do("insert into people values('Adric', 'N/A', 'Alzarius')");
$dbh->do("insert into people values('Susan', 'Foreman', 'Gallifrey')");

$res = $dbh->selectall_arrayref(q(select * from people));

foreach (@$res){
  foreach $i (0..$#$_){
    print "$_->[$i] ";
  }
  print "\n";
}

$dbh->disconnect;
